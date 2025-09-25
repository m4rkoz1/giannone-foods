import Logo from '../Logo';

export default function LogoExample() {
  return (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Logo Sizes</h3>
        <div className="flex flex-col gap-4 items-center">
          <Logo size="sm" />
          <Logo size="md" />
          <Logo size="lg" />
          <Logo size="xl" />
        </div>
      </div>
    </div>
  );
}