'use client'

import { useEffect, useState } from 'react'

import { type ProjectItemType } from '@/config/infoConfig'
import { GithubProjectCard } from '@/components/project/GithubProjectCard'

type GithubRepository = {
  full_name: string
  stargazers_count: number
  forks_count: number
}

type GithubProjectStats = Pick<ProjectItemType, 'gitStars' | 'gitForks'>

function getRepositoryKey(project: ProjectItemType) {
  try {
    const url = new URL(
      project.link.href.startsWith('http')
        ? project.link.href
        : `https://${project.link.href}`,
    )

    if (url.hostname !== 'github.com' && url.hostname !== 'www.github.com') {
      return null
    }

    const [owner, repository] = url.pathname.split('/').filter(Boolean)
    if (!owner || !repository) return null

    return `${owner}/${repository}`.toLowerCase()
  } catch {
    return null
  }
}

export function GithubProjectList({
  projects,
  titleAs,
  className,
}: {
  projects: ProjectItemType[]
  titleAs?: keyof React.JSX.IntrinsicElements
  className?: string
}) {
  const [latestStats, setLatestStats] = useState<
    Record<string, GithubProjectStats>
  >({})

  useEffect(() => {
    const controller = new AbortController()

    async function fetchLatestStats() {
      const repositoryKeys = projects
        .map(getRepositoryKey)
        .filter((key): key is string => key !== null)
      const owners = [...new Set(repositoryKeys.map((key) => key.split('/')[0]))]

      const repositoriesByOwner = await Promise.all(
        owners.map(async (owner) => {
          const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(owner)}/repos?type=owner&sort=full_name&direction=asc&per_page=100`,
            {
              cache: 'no-store',
              signal: controller.signal,
            },
          )

          if (!response.ok) {
            throw new Error(`GitHub API request failed: ${response.status}`)
          }

          return (await response.json()) as GithubRepository[]
        }),
      )

      const stats = repositoriesByOwner.flat().reduce<
        Record<string, GithubProjectStats>
      >((result, repository) => {
        result[repository.full_name.toLowerCase()] = {
          gitStars: repository.stargazers_count,
          gitForks: repository.forks_count,
        }
        return result
      }, {})

      setLatestStats(stats)
    }

    fetchLatestStats().catch((error: unknown) => {
      // 请求失败时保留配置中的数字，避免网络问题导致卡片信息闪烁或消失。
      if (error instanceof DOMException && error.name === 'AbortError') return
    })

    return () => controller.abort()
  }, [projects])

  return (
    <ul role="list" className={className}>
      {projects.map((project) => {
        const repositoryKey = getRepositoryKey(project)
        const stats = repositoryKey ? latestStats[repositoryKey] : undefined

        return (
          <GithubProjectCard
            key={project.name}
            project={stats ? { ...project, ...stats } : project}
            titleAs={titleAs}
          />
        )
      })}
    </ul>
  )
}
