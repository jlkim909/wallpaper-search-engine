import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../asset/search.svg';
import SearchTag from './SearchTag';
import SearchOption from './SearchOption';
import { paramContext } from '../App';

const SearchTagContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    justify-content: center;
`;

const SearchBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    padding: 4px 16px;
    width: 100%;
    align-items: center;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

const SearchInputContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const SearchInput = styled.input`
    background: transparent;
    font-size: 16px;
    outline: none;
    color: #5e5e5e;
    border: none;
    flex: auto;
    margin-left: 8px;
`;

const SearchOptionButton = styled.p`
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
    color: #5e5e5e;
`;

const Search = () => {
    const savedTagList = localStorage.getItem('tagList');
    const initialLocalStorage = savedTagList ? JSON.parse(savedTagList) : [];
    const [searchOption, setSearchOption] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [tagList, setTagList] = useState(initialLocalStorage);

    const { setParams } = useContext(paramContext);

    const toggleSearchOption = () => {
        setSearchOption((prev) => !prev);
    };

    const deleteTagHandler = (idx) => {
        const newTagList = [...tagList];
        newTagList.splice(idx, 1);
        setTagList(newTagList);
    };

    const onKeyDown = (e) => {
        if (e.code !== 'Enter' || searchValue.length === 0) return;
        setParams((prev) => ({ ...prev, q: searchValue }));
        setSearchValue('');
        setTagList((prev) => [...prev, searchValue]);
    };

    useEffect(() => {
        localStorage.setItem('tagList', JSON.stringify(tagList));
    }, [tagList]);

    return (
        <>
            <SearchBoxContainer>
                <SearchInputContainer>
                    <SearchIcon width="24" fill="#5e5e5e" />
                    <SearchInput
                        onKeyDown={onKeyDown}
                        placeholder="검색어 입력 후 ENTER"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <SearchOptionButton onClick={toggleSearchOption}>
                        검색 옵션 {searchOption ? '닫기' : '열기'}
                    </SearchOptionButton>
                </SearchInputContainer>
                {searchOption && <SearchOption />}
            </SearchBoxContainer>
            <SearchTagContainer>
                {tagList.map((tag, idx) => (
                    <SearchTag
                        key={idx}
                        label={tag}
                        deleteTagHandler={() => deleteTagHandler(idx)}
                    />
                ))}
            </SearchTagContainer>
        </>
    );
};

export default Search;
