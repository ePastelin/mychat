import ProfilePhoto from "@/components/common/ProfilePhoto";

interface Props {
  name: string;
  isActive: boolean;
}

export default function Profile({ name, isActive }: Props) {
  return (
    <div className="profilebg">
      <ProfilePhoto name={name} isActive={isActive} />
      <span className="font-semibold ml-4">{name}</span>
    </div>
  );
}
