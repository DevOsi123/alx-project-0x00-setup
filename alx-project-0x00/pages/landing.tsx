import Button from "@/components/Button";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-3xl font-bold mb-8">Button Component Variants</h1>

      <div className="flex flex-col gap-6">

        <div className="flex gap-4 items-center">
          <Button title="Small Button" size="small" shape="rounded-sm" />
          <Button title="Medium Button" size="medium" shape="rounded-md" />
          <Button title="Large Button" size="large" shape="rounded-lg"/>
        </div>

        <div className="flex gap-4 items-center">
          <Button title="Custom Rounded" size="small" shape="rounded-md" />
          <Button title="Circle Style" size="medium" shape="rounded-full" />
          <Button title="Boxy" size="large" shape="rounded-sm" />
        </div>

      </div>
    </div>
  );
};

export default Landing;