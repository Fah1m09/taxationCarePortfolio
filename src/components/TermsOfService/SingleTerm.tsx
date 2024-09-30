import { TOS } from "@/types/tos";

const SingleTerm = ({ term }: { term: TOS }) => {
  const { name, description } = term;

  return (
    <li className="mb-10">
      <b>{name}: </b>
      {description}
    </li>
  );
};

export default SingleTerm;
