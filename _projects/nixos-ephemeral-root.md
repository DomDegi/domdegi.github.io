---
layout: page
title: Declarative NixOS with an Ephemeral Root
description: "Nix, flake-parts and Impermanence: a fully declarative Linux system on a BTRFS root that is wiped on every boot, with encrypted secrets committed to the repository."
tags: [Nix, NixOS, Linux, Infrastructure as Code, BTRFS, sops, DevOps]
weight: 6
---

My daily-driver Linux system, defined entirely as code. The whole machine — kernel options, drivers, packages, dotfiles, desktop shell, secrets — is reproduced from a single Nix flake, so the same configuration rebuilds the identical system on any disk.

## Ephemeral root & persistence
The root BTRFS subvolume, covering both `/` and `/home`, is **rolled back in the initrd on every boot**. Anything not explicitly declared as persistent is gone after a reboot; previous roots are retained for 30 days so nothing is lost silently.

This inverts the usual failure mode of a Linux install. State cannot accumulate invisibly, configuration drift is impossible by construction, and every file that survives a reboot had to be justified and written down. It is the same discipline as an immutable container image, applied to a workstation.

## Modular architecture
The flake uses the **dendritic pattern**: `flake-parts` provides the top-level module system and `import-tree` auto-imports every `.nix` file under `modules/`, so there is no central list of imports to maintain — adding a feature means adding a file.

Each file is one complete *feature* and contributes to every layer that feature touches. A battery-conservation feature, for example, declares its system group, its sysfs rule, its script and its sudo rule alongside the desktop widget that exposes it, all in one place, rather than scattering those fragments across system and user configuration.

## Secrets management
Secrets are handled with **sops-nix**: the encrypted secrets file is committed to the public repository, while the age key that decrypts it lives only on the machine. This keeps the configuration genuinely reproducible and publishable without leaking credentials — the encrypted material is safe to publish, and decryption is wired into the boot sequence early enough to create users.

## Stack
Nix and NixOS with Home Manager, BTRFS subvolumes and Impermanence, sops-nix for secrets, the Niri scrollable tiling compositor and the Noctalia shell with custom widgets, and a Fish/Starship terminal environment.

> **Source Code:** [View on GitHub](https://github.com/DomDegi/nixos-configs)
