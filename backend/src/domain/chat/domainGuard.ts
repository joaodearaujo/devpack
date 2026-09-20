const STRONG_LINUX_TERMS = [
    'linux',
    'ubuntu',
    'debian',
    'fedora',
    'arch linux',
    'kernel',
    'bash',
    'shell',
    'terminal',
    'apt',
    'apt-get',
    'snap',
    'flatpak',
    'pacman',
    'dnf',
    'zypper',
    'package',
    'packages',
    'pacote',
    'pacotes',
    'sudo',
    'systemd',
    'filesystem',
    'permissions',
    'permissões',
    'chmod',
    'chown',
    'ssh',
    'docker',
    'podman',
    'kubernetes',
    'kubectl',
    'helm',
    'devpack',
    'gnome',
    'kde',
    'wayland',
    'x11',
    'cpu',
    'memory',
    'ram',
    'disk',
    'storage',
    'wifi',
    'bluetooth',
    'driver',
    'gpu',
    'nvidia',
    'amd',
    'intel',
    'display',
    'monitor',
    'audio',
    'pipewire',
    'pulseaudio',
    'alsa',
    'boot',
    'grub',
    'partition',
    'mount',
    'fstab',
    'cron',
    'crontab',
    'journalctl',
    'log',
    'logs',
]

const LINUX_CONTEXT_TERMS = [
    'install',
    'instal',
    'configure',
    'configur',
    'command',
    'comando',
    'terminal',
    'shell',
    'linux',
    'ubuntu',
    'package',
    'pacote',
    'apt',
    'snap',
    'sudo',
    'docker',
    'kubernetes',
    'server',
    'servidor',
]

const DEVELOPER_TOOLS = [
    'git',
    'python',
    'node.js',
    'nodejs',
    'rust',
    'java',
    'openjdk',
    'php',
    'dotnet',
    'neovim',
    'vim',
    'vscode',
    'postgresql',
    'mysql',
    'redis',
    'sqlite',
    'mongodb',
    'cmake',
    'make',
    'meson',
    'firefox',
    'chromium',
]

const normalized = (value: string) => value.trim().toLowerCase()

function containsTerm(text: string, term: string) {
    if (term.includes(' ')) return text.includes(term)
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`, 'i').test(text)
}

function hasAnyTerm(text: string, terms: string[]) {
    return terms.some((term) => containsTerm(text, term))
}

export function isLinuxRelated(message: string) {
    const text = normalized(message)
    if (!text) return false

    if (hasAnyTerm(text, STRONG_LINUX_TERMS)) return true

    const mentionsDeveloperTool = hasAnyTerm(text, DEVELOPER_TOOLS)
    const hasLinuxContext = hasAnyTerm(text, LINUX_CONTEXT_TERMS)

    return mentionsDeveloperTool && hasLinuxContext
}

export const OUT_OF_SCOPE_MESSAGE =
    'Posso responder somente sobre Linux, Ubuntu, shell, gerenciamento de pacotes e o DevPack. Reformule a pergunta dentro desse contexto.'
