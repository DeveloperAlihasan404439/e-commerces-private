import ProfileMenu from "@/components/Shared/ProfileMenu/ProfileMenu";

export default function layout({ children }) {
  return (
    <div className="w-[90%] mx-auto my-5 bg-gray-50 border p-8 rounded space-y-5">
      <h2 className="text-lg font-bold">My Profile</h2>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <ProfileMenu/>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
