<template>
  <div id="maptools">
    <el-row>
      <el-button icon="el-icon-search" circle @click="drawLine"></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
    </el-row>
  </div>
</template>
<script>
import { LineString, Polygon } from "ol/geom";
export default {
  data() {
    return {
      source: null,
      vector: null,
      sketch: null,
      helpTooltipElement: null,
      helpTooltip: null,
      measureTooltipElement: null,
      measureTooltip: null,
      continuePolygonMsg: "不能绘制面",
      continueLineMsg: "不能绘制线",
    };
  },
  mounted() {},
  methods: {
    drawLine() {},
    pointerMoveHandler(evt) {
      if (evt.dragging) {
        return;
      }
      /** @type {string} */
      let helpMsg = "Click to start drawing";

      if (this.sketch) {
        let geom = this.sketch.getGeometry();
        if (geom instanceof Polygon) {
          helpMsg = this.continuePolygonMsg;
        } else if (geom instanceof LineString) {
          helpMsg = this.continueLineMsg;
        }
      }
      this.helpTooltipElement.innerHTML = helpMsg;
      this.helpTooltip.setPosition(evt.coordinate);
      this.helpTooltipElement.classList.remove("hidden");
    },
  },
};
</script>

<style>
#maptools {
  width: 198px;
  height: 48px;
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>
