__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});e.CONNECTIONS_CONTAINER_MODULES={desktop:"desktop",feed_timeline:"feed_timeline",follow_requests:"follow_requests",newsfeed_you:"newsfeed_you",profile:"profile",feed_contextual_chain:"feed_contextual_chain",discover_people:"discover_people",find_friends_contacts:"find_friends_contacts",followers:"followers",self_followers:"self_followers",following:"following",self_following:"self_following",profile_social_context:"profile_social_context",story:"story",explore:"explore",frx_web_reporting:"frx_web_reporting"},e.VIEW_MODULES={activity_page:"activity_page",desktop_explore:"desktop_explore",desktop_feed:"desktop_feed",discover_people:"discover_people",empty_feed:"empty_feed",end_of_feed:"end_of_feed",follower_list:"follower_list",profile:"profile",hscroll_feed:"hscroll_feed",story_viewer_list:"story_viewer_list",web_feed_hscroll_aysf:"web_feed_hscroll_aysf",web_profile_chaining:"web_profile_chaining",web_related_profiles:"web_related_profiles"},e.logConnectionAction=function({clickPoint:o,containerModule:l,eventName:_,followStatus:t,targetId:f,position:s,viewModule:n}){const c={position:s,click_point:o,follow_status:t,target_id:f,view:n,device_model:r(d[0]).getBrowserString(),device_os:'Web',primary_locale:r(d[1]).getLocale(),deviceid:r(d[2]).getDeviceOrMachineId()};r(d[3]).logPigeonEvent(r(d[4]).createEvent(_,r(d[3]).getExtra(c),{module:l}))}},10027194,[9699340,9699344,10027386,9699365,10027113]);