import * as types from '../actionTypes/articles';


export function fetchArticle() {
	return async dispatch => {
		dispatch({type: types.FETCH_ARTICLES});
		try {
			let response = await fetch('https://rails-api-article.herokuapp.com/articles');
			if (response.status !== 200) {
				throw new Error('FETCH_ERROR');
			}
			response = await response.json();
			dispatch({type: types.FETCH_ARTICLES_SUCCESS, data: response});
		} catch (error) {
			dispatch({type: types.FETCH_ARTICLES_FAILURE, error})
		}
	}
}

export function createArticle(article) {
	return async dispatch => {
		dispatch({type: types.CREATE_ARTICLE})
		try {
			let response = await fetch('https://rails-api-article.herokuapp.com/articles', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({article})
			});
			if (response.status !== 200) {
				throw new Error('FETCH_ERROR');
			}
			response = await response.json();
			dispatch({type: types.CREATE_ARTICLE_SUCCESS, data: response});
		} catch (error) {
			dispatch({type: types.CREATE_ARTICLE_FAILURE, error})
		}
	}
} 

export function updateArticle(article,id) {
	return async dispatch => {
		dispatch({type: types.UPDATE_ARTICLE})
		try {
			let response = await fetch('https://rails-api-article.herokuapp.com/articles'+id, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({article})
			});
			if (response.status !== 200) {
				throw new Error('FETCH_ERROR');
			}
			response = await response.json();
			dispatch({type: types.UPDATE_ARTICLE_SUCCESS, data: response});
		} catch (error) {
			dispatch({type: types.UPDATE_ARTICLE_FAILURE, error})
		}
	}
} 






export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_FAILURE = 'DELETE_ARTICLE_FAILURE';
