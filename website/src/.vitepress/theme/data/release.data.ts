import { defineLoader } from 'vitepress'
import { Octokit } from '@octokit/rest'
import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'

const octokit = new Octokit()

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export interface AppRelease {
  stable: GitHubRelease
  beta: GitHubRelease
}

declare const data: AppRelease
export { data }

export default defineLoader({
  async load(): Promise<AppRelease> {
    const { data: stable } = await octokit.repos.getLatestRelease({
      owner: 'repodevil',
      repo: 'himitsu',
    })

    const { data: beta } = await octokit.repos.getLatestRelease({
      owner: 'repodevil',
      repo: 'himitsu-ichimoku',
    })

    return { stable, beta }
  },
})
