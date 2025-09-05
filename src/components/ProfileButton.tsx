const ProfileButton = ({ userImage }: { userImage: string }) => {
  return (
    <>
      <div className="relative cursor-pointer">
        <img
          src={userImage}
          alt="avatar"
          className="aspect-square max-w-10 rounded-full object-cover"
        />
      </div>
    </>
  );
};

export default ProfileButton;
