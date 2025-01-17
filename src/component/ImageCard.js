import styled from 'styled-components';

const Card = styled.div`
    margin-left: 8px;
    margin-bottom: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 300px;
    padding: 8px;
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 4px;
`;

const ImageCard = ({ imgData, setModalData }) => {
    const { webformatURL, id, tags, views, likes, largeImageURL } = imgData;
    return (
        <Card
            onClick={() =>
                setModalData({
                    tags: tags,
                    views: views,
                    likes: likes,
                    largeImageURL: largeImageURL,
                })
            }
        >
            <Img key={id} src={webformatURL}></Img>
        </Card>
    );
};

export default ImageCard;
