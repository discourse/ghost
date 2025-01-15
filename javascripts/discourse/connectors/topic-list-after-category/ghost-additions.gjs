import Component from "@glimmer/component";
import { service } from "@ember/service";
import icon from "discourse/helpers/d-icon";
import formatDate from "discourse/helpers/format-date";
import number from "discourse/helpers/number";

export default class GhostAdditionsComponent extends Component {
  @service site;

  <template>
    <div class="ghost-activity num">
      {{formatDate @outletArgs.topic.bumpedAt format="tiny" noTitle="true"}}
    </div>

    <div class="ghost-replies num">
      {{icon "far-comment"}}
      {{number @outletArgs.topic.replyCount noTitle="true"}}
    </div>

    <div class="ghost-views num">
      {{icon "far-eye"}}
      {{number @outletArgs.topic.views numberKey="views_long"}}
    </div>
  </template>
}
