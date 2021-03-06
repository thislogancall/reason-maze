'use strict';


function FromTile(Tile) {
  var adjacents = function () {
    return Tile[/* adjacents */1];
  };
  var adjacent_coord = function () {
    return Tile[/* adjacent_coord */2];
  };
  var direction_to_border = function () {
    return Tile[/* direction_to_border */3];
  };
  var tile_at_coord = function () {
    return Tile[/* to_shape */4];
  };
  return /* module */[
          /* Coord */Tile[/* Coord */0],
          /* adjacents */adjacents,
          /* adjacent_coord */adjacent_coord,
          /* direction_to_border */direction_to_border,
          /* tile_at_coord */tile_at_coord
        ];
}

exports.FromTile = FromTile;
/* No side effect */
