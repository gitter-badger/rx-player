/**
 * Copyright 2015 CANAL+ Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const Timeline = require("./timeline");

class Smooth extends Timeline {
  checkRange(time) {
    const { timeline } = this.index;
    let last = timeline[timeline.length - 1];
    if (!last) {
      return true;
    }

    if (last.d < 0) {
      last = { ts: last.ts, d: 0, r: last.r };
    }

    return (time <= Timeline.getRangeEnd(last));
  }
}

module.exports = Smooth;
