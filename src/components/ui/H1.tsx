interface Props {
  children: string;
}

export const H1 = ({ children }: Props) => {
  return (
    <h1 className="text-3xl text-center font-extrabold tracking-widest my-5 uppercase border-b border-black pb-4 w-fit mx-auto">
      {children}
    </h1>
  );
};
