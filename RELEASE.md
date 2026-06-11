# Releasing

This SDK is versioned independently of the otari gateway, with its own semver.
Releases are automated with [release-please](https://github.com/googleapis/release-please).

## How a release happens

1. Merge changes to `main` using [Conventional Commits](https://www.conventionalcommits.org/)
   (`feat:`, `fix:`, etc.). This includes the gateway codegen's regeneration PRs
   and ordinary shell PRs.
2. release-please opens or updates a single **release PR** that bumps the version
   in `package.json` and writes `CHANGELOG.md`.
3. Review and merge the release PR. That tags the release and creates a GitHub
   Release.
4. The same workflow run (`.github/workflows/release-please.yml`, gated on
   `release_created`) builds the package and publishes it to npm with provenance.

## Configuration

- **Registry:** npm (`@mozilla-ai/otari`, public).
- **Auth:** `NPM_TOKEN` repository secret, plus `id-token: write` for npm
  provenance.
- **Version file:** `package.json` `version` (release-please owns it; do not edit
  it by hand).

## Prerequisites (one time, repo settings)

- Enable **Settings to Actions: "Allow GitHub Actions to create and approve pull
  requests"** so release-please can open its release PR.
- Store the `NPM_TOKEN` secret (an npm automation token with publish rights).

## If the publish fails

The release tag and GitHub Release already exist, so re-run the failed `publish`
job from the Actions tab to retry publishing the same version. Avoid cutting a
release by hand; the automated path keeps `package.json`, the tag, and the
changelog in sync.

See the gateway's [SDK release coordination and compatibility](https://github.com/mozilla-ai/otari/blob/main/docs/sdk-compatibility.md)
for the cross-repo policy, the spec-version model, and the end-to-end flow.
