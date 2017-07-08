import React from 'react';
import { find } from 'lodash';
import ReactMarkdown from 'react-markdown';

const stories = [];

export function addStory( story ) {
	const { name, parents = [], markdown } = story;
	stories.push( {
		path: '/' + parents.concat( name ).join( '/' ),
		id: parents.concat( name ).join( '.' ),
		parent: parents.join( '.' ),
		Component: markdown ? () => <ReactMarkdown source={ markdown } /> : story.Component,
		...story,
	} );
}

export function getStories() {
	return stories;
}

export function getStory( id ) {
	return find( stories, ( story ) => story.id === id );
}

export function getChildren( id ) {
	return stories.filter( ( story ) => story.parent === id );
}

export function getOrderedPageList( parentId = '' ) {
	return getChildren( parentId ).reduce( ( memo, story ) => {
		memo.push( story );
		return memo.concat( getOrderedPageList( story.id ) );
	}, [] );
}

export function getNextStory( id ) {
	const orderedList = getOrderedPageList();
	const index = orderedList.indexOf( getStory( id ) );

	return orderedList[ index + 1 ];
}

export function getPreviousStory( id ) {
	const orderedList = getOrderedPageList();
	const index = orderedList.indexOf( getStory( id ) );

	return orderedList[ index - 1 ];
}