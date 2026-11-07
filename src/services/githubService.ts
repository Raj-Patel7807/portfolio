import type { GitHubStats, ServiceResponse, StatsServiceOptions } from '@/types/services';

/**
 * Placeholder GitHub Statistics Service
 * In Phase 7: Pure interface architecture, zero external runtime calls.
 * Returns null or static fallback safely.
 */
export async function fetchGitHubStats(
    username: string,
    _options: StatsServiceOptions = {}
): Promise<ServiceResponse<GitHubStats>> {
    if (!username) {
        return {
            data: null,
            error: 'Username is required',
            status: 'error',
        };
    }

    // Placeholder implementation: safe mock resolution without network dependency
    return {
        data: null,
        error: null,
        status: 'idle',
        timestamp: Date.now(),
    };
}
