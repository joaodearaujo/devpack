# DevPack Product Definition

## Problem

Setting up a development machine repeatedly involves discovering packages, remembering installation commands, switching between package managers, and rebuilding the same shell script.

## Product promise

DevPack turns that repetitive setup process into an explicit, inspectable workflow: discover → select → review → copy.

## Non-goals

DevPack does not silently execute commands, manage privileged credentials, or pretend to support every Linux distribution.

## Target environment

The current curated recipes are centered on Ubuntu and common Linux tooling. Package entries expose the installation mechanism so users can see what DevPack intends to run before copying the script.

## Trust model

The user remains the final authority over installation. The product surfaces commands and notes rather than executing them automatically.
