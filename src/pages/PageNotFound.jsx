import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-heading text-7xl font-medium text-muted-foreground/40">404</h1>
          <div className="h-px w-16 bg-border mx-auto" />
        </div>
        <div className="space-y-3">
          <h2 className="font-heading text-2xl text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground leading-relaxed">
            The page <span className="font-medium text-foreground">"{pageName}"</span> doesn't exist.
          </p>
        </div>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 font-mono text-sm rounded-full bg-foreground text-background hover:bg-accent hover:text-foreground transition-all"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
