import { useContext } from 'react';
import styled from 'styled-components';
import { paramContext } from '../App';
import { ReactComponent as DeleteIcon } from '../asset/delete.svg';

const Tag = styled.div`
    display: flex;
    font-size: 14px;
    border-radius: 16px;
    padding: 6px 10px;
    color: var(--primary);
    background-color: var(--highlight);
    cursor: pointer;
    &:hover {
        background-color: var(--overlay);
    }
    margin: 4px;
`;

const TagLabel = styled.span`
    margin-right: 4px;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;

const SearchTag = ({ label, deleteTagHandler }) => {
    const { setParams } = useContext(paramContext);

    const onClick = () => {
        setParams((prev) => ({ ...prev, q: label }));
    };

    return (
        <Tag onClick={onClick}>
            <TagLabel>{label}</TagLabel>
            <DeleteIcon width="12px" onClick={deleteTagHandler} />
        </Tag>
    );
};

export default SearchTag;
