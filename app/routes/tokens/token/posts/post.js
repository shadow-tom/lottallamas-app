import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class TokensTokenPostsPostRoute extends Route {
	@service store;

	async model(params) {
		const post = await this.store.findRecord('post', params.post_id);

		const comments = await this.store.query('comment', {
			postId: params.post_id,
			contentId: post.contentId,
		});

		return hash({ post, comments });
	}
}
