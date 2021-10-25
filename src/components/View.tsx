import { viewProps } from '../types/Components';
import Table from './Table';
import Unit from './Unit';

const View = ({ cookies, content, setContent, id, setId }: viewProps) => {
  return (
    <div className="View">
      {id === '' ? (
        <Table
          cookies={cookies}
          content={content}
          setContent={setContent}
          id={id}
          setId={setId}
        />
      ) : (
        <Unit cookies={cookies} content={content} id={id} />
      )}
    </div>
  );
};

export default View;
