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
- **Auth:** OIDC trusted publishing. No npm token is stored anywhere. The publish
  job requests `id-token: write`, and npm checks the repository and the workflow
  filename against the package's trusted publisher before issuing a credential
  scoped to that single job. The same token carries npm provenance.
- **Version file:** `package.json` `version` (release-please owns it; do not edit
  it by hand).

The trusted publisher is bound to the workflow **filename**, so renaming
`.github/workflows/release-please.yml` stops publishing until the setting on npm
is updated to match.

Publishing runs inside the release workflow rather than on a `release: published`
trigger because a release created with `GITHUB_TOKEN` does not start further
workflow runs. Splitting it out would need a PAT, which reintroduces the
long-lived secret that trusted publishing removes.

## Prerequisites (one time)

Repository settings:

- Enable **Settings to Actions: "Allow GitHub Actions to create and approve pull
  requests"** so release-please can open its release PR.

Trusted publisher, added under the package's settings on npm:

| Field | Value |
| --- | --- |
| Publisher | GitHub Actions |
| Organization or user | `mozilla-ai` |
| Repository | `otari-sdk-ts` |
| Workflow filename | `release-please.yml` |
| Environment name | leave blank |
| Allowed actions | Allow npm publish |

An environment name set here requires the publish job to declare the same
environment, so leave it blank unless the workflow gains one.

## If the publish fails

The release tag and GitHub Release already exist, so only the publish needs
repeating. Run the **Release** workflow from the Actions tab using **Run
workflow**, passing the release tag (for example `otari-v0.6.0`). That checks out
the tag and publishes that exact version without cutting a new one. Avoid
publishing by hand; the automated path keeps `package.json`, the tag, and the
changelog in sync.

A publish that fails with `E404` on a `PUT` is an authentication failure, not a
missing package. npm answers 404 rather than 403 so it does not reveal whether a
package exists. Check that the trusted publisher still matches the repository and
the workflow filename.

See the gateway's [SDK release coordination and compatibility](https://github.com/mozilla-ai/otari/blob/main/docs/sdk-compatibility.md)
for the cross-repo policy, the spec-version model, and the end-to-end flow.
