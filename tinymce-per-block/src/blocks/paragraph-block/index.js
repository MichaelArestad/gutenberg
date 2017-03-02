/**
 * External dependencies
 */
import { registerBlock } from 'wp-blocks';
import {
	EditorParagraphIcon,
	EditorAlignLeftIcon,
	EditorAlignCenterIcon,
	EditorAlignRightIcon
} from 'dashicons';

/**
 * Internal dependencies
 */
import form from './form';

registerBlock( 'paragraph', {
	title: 'Paragraph',
	form: form,
	icon: EditorParagraphIcon,
	controls: [
		{
			label: 'Align Left',
			icon: EditorAlignLeftIcon,
			isSelected: ( { attrs } ) => ! attrs.align || 'left' === attrs.align,
			onClick( { setAttributes } ) {
				setAttributes( {
					align: 'left'
				} );
			}
		},
		{
			label: 'Align Center',
			icon: EditorAlignCenterIcon,
			isSelected: ( { attrs } ) => 'center' === attrs.align,
			onClick( { setAttributes } ) {
				setAttributes( {
					align: 'center'
				} );
			}
		},
		{
			label: 'Align Right',
			icon: EditorAlignRightIcon,
			isSelected: ( { attrs } ) => 'right' === attrs.align,
			onClick( { setAttributes } ) {
				setAttributes( {
					align: 'right'
				} );
			}
		}
	]
} );