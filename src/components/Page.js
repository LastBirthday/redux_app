
import React, { PropTypes, Component } from 'react';

class Page extends Component {

    onYearButtonClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }

    render() {
        const { year, photos, fetching } = this.props;
        return (
            <div className='ib page'>
                <p>
                    <button className='btn' onClick={::this.onYearButtonClick}>2016</button>{' '}
                    <button className='btn' onClick={::this.onYearButtonClick}>2015</button>{' '}
                    <button className='btn' onClick={::this.onYearButtonClick}>2014</button>
                </p>
                <h3>{year} год</h3>
                {
                    fetching ? <p>Загрузка...</p>
                        :
                        <p>У тебя {photos.length} фото</p>
                }
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
};

export default Page;