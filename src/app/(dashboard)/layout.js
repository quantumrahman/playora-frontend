import '../globals.css';

export default function DashboardLayout({ children }) {
    return (
        <main className="relative min-h-screen w-full bg-[#0F1515]">
            <div className="absolute inset-0 bg-[url('/assets/svg/grain-bg.svg')] bg-repeat" />
            <div className="relative z-10">{children}</div>
        </main>
    );
}
