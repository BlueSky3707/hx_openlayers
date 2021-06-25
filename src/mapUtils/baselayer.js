//获取所有图层
const getAllLayers = () => {
  let players = window.$olMap.getLayers();
  return players;
};
//根据图层id获取相应的图层
export const getLayerByid = (layerid) => {
  let players = getAllLayers();
  let player = null;
  try {
    for (let i = 0; i < players.length; i++) {
      if (players[i].get("layerId") === layerid) {
        player = players[i].get("layerId");
        break;
      }
    }
  } catch (error) {
    console.log("获取" + layerId + "图层出错");
  } finally {
  }
  return player;
};
//根据图层id隐藏图层
export const hiddenLayerById = (layerid) => {
  let players = getAllLayers();
  if (players) {
    try {
      layers.forEach((layer) => {
        if (layer.get("layeId") === layerid) {
          layer.setVisible(false);
        }
      });
    } catch (error) {
      console.log("隐藏" + layerId + "图层出错");
    } finally {
    }
  }
};
//根据id显示图层
export const showLayerById = (layerid) => {
  let players = getAllLayers();
  if (players) {
    try {
      layers.forEach((layer) => {
        if (layer.get("layeId") === layerid) {
          layer.setVisible(true);
        }
      });
    } catch (error) {
      console.log("显示" + layerId + "图层出错");
    } finally {
    }
  }
};
//根据图层id移除图层
export const reMoveLayerById = (layerId) => {
  let player = getLayerByid(layerId);
  try {
    if (player) {
      window.$olMap.removeLayer(player);
    }
  } catch (error) {
    console.log("移除" + layerId + "图层出错");
  } finally {
  }
};
