import { useEffect, useMemo, useRef, useState } from 'react'

type AdminConfig = {
  username: string
  password: string
  autoplay: boolean
}

type ApkDownload = {
  name: string
  route: string
  version: string
  fileName: string
  href: string
  status: string
}

const apkDownloads: ApkDownload[] = [
  {
    name: 'Home Screen APK',
    route: '/',
    version: 'v1.0.0',
    fileName: 'brand-slots-home.apk',
    href: '#',
    status: 'Add your built APK file URL here',
  },
  {
    name: 'Products Screen APK',
    route: '/products',
    version: 'v1.0.0',
    fileName: 'brand-slots-products.apk',
    href: '#',
    status: 'Add your built APK file URL here',
  },
  {
    name: 'Brands Screen APK',
    route: '/brands',
    version: 'v1.0.0',
    fileName: 'brand-slots-brands.apk',
    href: '#',
    status: 'Add your built APK file URL here',
  },
  {
    name: 'Companies Screen APK',
    route: '/companies',
    version: 'v1.0.0',
    fileName: 'brand-slots-companies.apk',
    href: '#',
    status: 'Add your built APK file URL here',
  },
  {
    name: 'Admin Screen APK',
    route: '/admin',
    version: 'v1.0.0',
    fileName: 'brand-slots-admin.apk',
    href: '#',
    status: 'Add your built APK file URL here',
  },
]

function getAdminConfig(): AdminConfig {
  const params = new URLSearchParams(window.location.search)

  return {
    username: params.get('username') ?? 'admin',
    password: params.get('password') ?? 'admin123',
    autoplay: params.get('autoplay') !== '0',
  }
}

export default function AdminProfile() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playbackBlocked, setPlaybackBlocked] = useState(false)
  const adminConfig = useMemo(getAdminConfig, [])

  useEffect(() => {
    if (!adminConfig.autoplay || !videoRef.current) {
      return
    }

    const attemptPlayback = async () => {
      try {
        await videoRef.current?.play()
        setPlaybackBlocked(false)
      } catch {
        setPlaybackBlocked(true)
      }
    }

    void attemptPlayback()
  }, [adminConfig.autoplay])

  const handleResumePlayback = async () => {
    try {
      await videoRef.current?.play()
      setPlaybackBlocked(false)
    } catch {
      setPlaybackBlocked(true)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,16,46,0.24),transparent_34%),linear-gradient(135deg,#090909_0%,#111111_55%,#1b0508_100%)]" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-6 py-8 lg:px-10">
        <header className="glass-dark flex flex-col gap-6 rounded-[28px] border border-white/10 px-6 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#ff687e]">
              Brand Slots Admin
            </p>
            <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Admin screen ready for Render, desktop wrapper, and Flutter APK playback.
            </h1>
            <p className="max-w-2xl text-sm text-white/65 sm:text-base">
              This screen is built for kiosk-style playback. When the app opens, the
              featured video starts automatically where the device allows it.
            </p>
          </div>

          <div className="glass-red rounded-3xl px-5 py-4 text-sm text-white/85">
            <div className="font-semibold text-white">Embedded launch profile</div>
            <div className="mt-2 text-white/65">Username: {adminConfig.username}</div>
            <div className="text-white/65">Password: {adminConfig.password}</div>
          </div>
        </header>

        <div className="grid flex-1 gap-8 lg:grid-cols-[1.45fr_0.9fr]">
          <section className="glass-dark relative overflow-hidden rounded-[32px] border border-white/10 p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                  Auto Playback
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">Featured Admin Video</h2>
              </div>
              <span className="rounded-full border border-[#C8102E]/40 bg-[#C8102E]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8093]">
                Live Screen
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black">
              <video
                ref={videoRef}
                className="aspect-video w-full object-cover"
                src="/hero.mp4"
                poster="/hero-security.jpg"
                autoPlay={adminConfig.autoplay}
                muted
                loop
                playsInline
                controls
              />

              {playbackBlocked ? (
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur">
                  <p className="text-sm text-white/80">
                    Autoplay was blocked on this device. Tap the button below once to
                    continue kiosk playback.
                  </p>
                  <button className="btn-primary mt-3" onClick={() => void handleResumePlayback()}>
                    Resume video
                  </button>
                </div>
              ) : null}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="glass-dark rounded-[28px] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Deployment
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">Render-ready route</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Host this app as a static site on Render, then open the admin route
                directly from desktop or Flutter:
              </p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-sm text-[#ff8093]">
                /admin?autoplay=1&amp;username=admin&amp;password=admin123
              </div>
            </section>

            <section className="glass-dark rounded-[28px] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Important
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">Security note</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Keeping a real password inside an APK or desktop app is convenient, but it
                is also extractable. For production, replace this with a kiosk token or a
                device-specific signed link.
              </p>
            </section>

            <section className="glass-dark rounded-[28px] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                Status
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white/70">
                <li>Video loads from the current project assets.</li>
                <li>Autoplay is attempted automatically on page load.</li>
                <li>Fallback button appears only when autoplay is blocked.</li>
                <li>Desktop and Flutter wrappers can target this same hosted route.</li>
              </ul>
            </section>
          </aside>
        </div>

        <section className="glass-dark rounded-[32px] border border-white/10 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                APK Downloads
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">Download an APK for each screen</h2>
            </div>
            <p className="max-w-xl text-sm text-white/60">
              Replace each placeholder link with your uploaded APK URL after you build the
              Flutter screen package.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {apkDownloads.map((apk) => {
              const isReady = apk.href !== '#'

              return (
                <article
                  key={apk.name}
                  className="rounded-[28px] border border-white/10 bg-black/25 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{apk.name}</h3>
                      <p className="mt-1 text-sm text-white/55">Route: {apk.route}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                      {apk.version}
                    </span>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                    <div>{apk.fileName}</div>
                    <div className="mt-1 text-xs text-white/45">{apk.status}</div>
                  </div>

                  <a
                    className={`btn-primary mt-5 w-full justify-center ${!isReady ? 'pointer-events-none opacity-60' : ''}`}
                    href={apk.href}
                    download={apk.fileName}
                    aria-disabled={!isReady}
                  >
                    Download APK
                  </a>
                </article>
              )
            })}
          </div>
        </section>
      </section>
    </main>
  )
}
