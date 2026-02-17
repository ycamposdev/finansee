// app/admin/layout.js
export default function AdminLayout({ children }) {
  return (
    <section>
      {/* Aquí podrías poner un header específico de admin si quisieras */}
      {children}
    </section>
  );
}
