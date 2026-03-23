export function MobileOverlay() {
  return (
    <div className="fixed inset-0 z-[100] hidden flex-col items-center justify-center bg-background p-6 text-center sm:flex">
      <div className="max-w-md space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        </div>
        <h2 className="font-sans text-2xl font-medium text-foreground">
          Mobile Experience Recommended
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          This digital companion was designed specifically as an interactive guide for exhibition attendees using their mobile devices. 
          <br /><br />
          Please adjust your browser window size or open this site on a mobile device for the intended experience.
        </p>
      </div>
    </div>
  );
}
