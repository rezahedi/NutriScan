
export default function DeviceFrame( { children }: { children: React.ReactNode } ) {
  return (
    <section className="items-center justify-center flex h-screen">
      <div className="relative z-50 mx-auto h-full sm:h-[700px] sm:w-[370px] min-w-[350px] sm:rounded-[42px] sm:border-[14px] sm:border-[var(--foreground)] shadow-xl">
        <div className="absolute left-1/2 top-0 z-50 h-[18px] w-[148px] translate-x-[-50%] rounded-b-[1rem] bg-[var(--foreground)] hidden sm:block"></div>
        <div className="absolute left-[-17px] top-[124px] z-50 h-[46px] w-[4px] rounded-l-lg bg-[var(--foreground)] hidden sm:block"></div>
        <div className="absolute left-[-17px] top-[178px] z-50 h-[46px] w-[4px] rounded-l-lg bg-[var(--foreground)] hidden sm:block"></div>
        <div className="absolute right-[-17px] top-[142px] z-50 h-[64px] w-[4px] rounded-r-lg bg-[var(--foreground)] hidden sm:block"></div>
        <div className="relative h-full w-full overflow-hidden break-words sm:rounded-[32px] bg-[var(--background)]">
          <div className="relative z-20 h-full w-full items-center justify-center bg-[var(--background)] text-sm text-muted-foreground overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
