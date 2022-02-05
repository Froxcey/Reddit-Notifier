interface RedditSubResponse {
  data: {
    after: string;
    dist: number;
    modash: string;
    geo_filter: string;
    children: [
      {
        kind: string;
        data: {
          approved_at_utc: any;
          /** name of the subreddit */
          subreddit: string;
          selftext: string;
          author_fullname: string;
          saved: boolean;
          mod_reason_title: string | null;
          gilded: number;
          /** Title of the post */
          title: string;
          link_flair_richtext: Array<any>;
          subreddit_name_prefixed: string;
          hidden: string;
          pwls: number;
          link_flair_css_class: string;
          downs: number;
          thumbnail_height: number | null;
          top_awarded_type: any | null;
          hide_score: boolean;
          name: string;
          quarantine: boolean;
          link_flair_text_color: string;
          upvote_ratio: number;
          author_flair_background_color: any | null;
          ups: number;
          total_awards_received: number;
          media_embed: object;
          thumbnail_width: number;
          author_flair_template_id: string | null;
          is_original_content: boolean;
          user_reports: Array<any>;
          secure_media: any | null;
          is_reddit_media_domain: boolean;
          is_meta: boolean;
          category: any | null;
          secure_media_embed: object;
          link_flair_text: string;
          can_mod_post: boolean;
          score: number;
          approved_by: any | null;
          is_created_from_ads_ui: boolean;
          author_premium: boolean;
          thumbnail: string;
          edited: boolean;
          author_flair_css_class: any | null;
          author_flair_richtext: [];
          gildings: object;
          post_hint: string;
          content_categories: any | null;
          is_self: boolean;
          subreddit_type: string;
          created: number;
          link_flair_type: string;
          wls: number;
          removed_by_category: any | null;
          banned_by: any | null;
          author_flair_type: string;
          domain: string;
          allow_live_comments: boolean;
          selftext_html: any | null;
          likes: any | null;
          suggested_sort: any | null;
          banned_at_utc: any | null;
          url_overridden_by_dest: string;
          view_count: any | null;
          archived: boolean;
          no_follow: boolean;
          is_crosspostable: boolean;
          pinned: boolean;
          over_18: boolean;
          preview: {
            images: Array<{
              source: {
                url: string;
                width: number;
                height: number;
              };
              resolutions: Array<{
                url: string;
                width: number;
                height: number;
              }>;
              variants: object;
              id: string;
            }>;
            enabled: boolean;
          };
          all_awardings: Array<any>;
          awarders: Array<any>;
          media_only: boolean;
          link_flair_template_id: string;
          can_gild: boolean;
          spoiler: boolean;
          locked: boolean;
          author_flair_text: string | null;
          treatment_tags: Array<any>;
          visited: boolean;
          removed_by: any | null;
          mod_note: any | null;
          distinguished: any | null;
          subreddit_id: string;
          author_is_blocked: boolean;
          mod_reason_by: any | null;
          num_reports: any | null;
          removal_reason: any | null;
          link_flair_background_color: string;
          id: string;
          is_robot_indexable: boolean;
          report_reasonsz: any | null;
          author: string;
          discussion_type: any | null;
          num_comments: number;
          send_replies: boolean;
          whitelist_status: string;
          contest_mode: boolean;
          mod_reports: Array<any>;
          author_patreon_flair: boolean;
          author_flair_text_color: any | null;
          permalink: string;
          parent_whitelist_status: string;
          stickied: boolean;
          url: string;
          subreddit_subscribers: number;
          created_utc: number;
          num_crossposts: number;
          media: any | null;
          is_video: boolean;
        };
      }
    ];
    before: any | null;
  };
}

export { RedditSubResponse };
