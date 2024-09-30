import { PrivacyPolicy } from "@/types/privacyPolicy";

const SinglePolicy = ({ term }: { term: PrivacyPolicy }) => {
  const { id, name, description, children } = term;

  return (
    <li className="mb-10">
      <b>{name} </b>
      <br />
      <br />
      {description}
      {children ? (
        <ul className="mb-5 mt-5 list-inside list-disc text-lg font-medium text-body-color">
          {children.map((childPolicy) => (
            <li key={`${id}-${childPolicy.id}`} className="mb-3">
              {childPolicy.description}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default SinglePolicy;
