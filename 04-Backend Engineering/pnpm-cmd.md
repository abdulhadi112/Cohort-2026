# pnpm Commands

pnpm is a fast, disk space-efficient alternative to npm that uses a content-addressable store to link packages across projects.  
The most common commands categorized by workflow follow below.
🏗️ Getting Started

- `pnpm init` : Initializes a new project and creates a package.json file.
- `pnpm --version` : Displays the current installed version of pnpm.

## 📦 Managing Dependencies

- `pnpm install`: Installs all dependencies defined in . Shortened to `pnpm i` .
- `pnpm install --frozen-lockfile`: Installs exact versions from the lockfile without updating it (ideal for CI/CD pipelines).
- `pnpm add <pkg>`: Installs a specific package and saves it to dependencies.
- `pnpm add -D <pkg> `: Installs a package as a development dependency ().
- `pnpm add -g <pkg> `: Installs a package globally on your system.
- `pnpm update`: Updates packages adhering to the ranges in `package.json`. Aliased to `pnpm up` .
- `pnpm update --latest`: Upgrades packages to their absolute latest versions, ignoring `package.json` constraints.
- `pnpm remove <pkg>`: Uninstalls a package and removes it from `package.json`. Aliased to `pnpm rm` .

## 🏃 Running Scripts & Binaries

- `pnpm run <script>`: Executes a script defined inside the `package.json`. You can drop the `run` keyword entirely for custom scripts (e.g., `pnpm dev` ).
- `pnpm exec <command>`: Runs a shell command or locally installed package binary (similar to `npx`).
- `pnpm dlx <pkg>`: Fetches a package from the registry temporarily, runs its binary without saving it, and discards it (direct equivalent to `npx`).

## 🔍 Inspecting & Debugging

- `pnpm list`: Outputs a tree structure of all installed package versions. Aliased to `pnpm ls` .
- `pnpm outdated`: Highlights dependencies that have newer versions available on the registry.
- `pnpm why <pkg>`: Shows exactly why a specific package is installed by tracing its dependency path.

## 📂 Monorepos & Workspaces

- `pnpm -r <command>`: Runs a specific command recursively across every project inside a workspace.
- `pnpm --filter <name> <command>`: Targets a specific workspace project to run a command, filtering out the rest.
