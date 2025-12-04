import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container py-3 flex items-center justify-between">
        <img 
          src={logo} 
          alt="Ceci Duca - Cocina Antiinflamatoria" 
          className="h-12 sm:h-14 w-auto"
        />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#programa" className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Programa
          </a>
          <a href="#temario" className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Temario
          </a>
          <a href="#sobre-mi" className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Sobre Mí
          </a>
          <a href="#testimonios" className="font-poppins text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Testimonios
          </a>
        </nav>
        <a href="#inscripcion" className="btn-primary text-sm py-2.5 px-5">
          Inscribirme
        </a>
      </div>
    </header>
  );
};

export default Header;
