// src/components/UserWelcome.tsx
interface UserWelcomeProps {
  name: string;
  onLogout: () => void;
}

const UserWelcome: React.FC<UserWelcomeProps> = ({ name, onLogout }) => {
  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(" ");
    if (names.length === 1) return names[0][0].toUpperCase();
    return (names[0][0] + names[1][0]).toUpperCase();
  };

  const initials = getInitials(name);
  const firstName = name.split(" ")[0];

  return (
    <div className="flex items-center gap-3 bg-blue-900 px-4 py-2 rounded-full text-white">
      <div className="w-10 h-10 rounded-full bg-white text-blue-900 flex items-center justify-center font-bold text-sm">
        {initials}
      </div>
      <span className="text-sm font-medium">Bienvenido, {firstName}</span>
      <button
        onClick={onLogout}
        className="ml-2 text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded transition"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default UserWelcome;
