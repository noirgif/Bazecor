/* bazecor-keymap -- Bazecor keymap library
 * Copyright (C) 2018, 2019  Keyboardio, Inc.
 * Copyright (C) 2019  DygmaLab SE
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { withModifiers } from "./utils";

const PunctuationTable = {
  groupName: "Punctuation",
  keys: [
    {
      code: 45,
      labels: {
        primary: "-"
      }
    },
    {
      code: 46,
      labels: {
        primary: "="
      }
    },
    {
      code: 47,
      labels: {
        primary: "["
      }
    },
    {
      code: 48,
      labels: {
        primary: "]"
      }
    },
    {
      code: 49,
      labels: {
        primary: "\\"
      }
    },
    {
      code: 51,
      labels: {
        primary: ";"
      }
    },
    {
      code: 52,
      labels: {
        primary: "'"
      }
    },
    {
      code: 53,
      labels: {
        primary: "`"
      }
    },
    {
      code: 54,
      labels: {
        primary: ","
      }
    },
    {
      code: 55,
      labels: {
        primary: "."
      }
    },
    {
      code: 56,
      labels: {
        primary: "/"
      }
    },
    {
      code: 57,
      labels: {
        primary: "⇪",
        verbose: "Caps Lock"
      }
    },
    {
      code: 100,
      labels: {
        primary: "<>",
        verbose: "ISO <>"
      }
    }
  ]
};

const ShiftedPunctuationTable = {
  groupName: "Shifted Punctuation",
  keys: [
    {
      code: 2093,
      labels: {
        primary: "_"
      }
    },
    {
      code: 2094,
      labels: {
        primary: "+"
      }
    },
    {
      code: 2095,
      labels: {
        primary: "{"
      }
    },
    {
      code: 2096,
      labels: {
        primary: "}"
      }
    },
    {
      code: 2097,
      labels: {
        primary: "|"
      }
    },
    {
      code: 2099,
      labels: {
        primary: ":"
      }
    },
    {
      code: 2100,
      labels: {
        primary: '"'
      }
    },
    {
      code: 2101,
      labels: {
        primary: "~"
      }
    },
    {
      code: 2102,
      labels: {
        primary: "<"
      }
    },
    {
      code: 2103,
      labels: {
        primary: ">"
      }
    },
    {
      code: 2104,
      labels: {
        primary: "?"
      }
    },
    {
      code: 2148,
      labels: {
        primary: "Alt. |",
        verbose: "Non-US |"
      }
    }
  ]
};

const ModifiedPunctuationTables = [
  // Single
  withModifiers(PunctuationTable, "Control +", "C+", 256),
  withModifiers(PunctuationTable, "Alt +", "A+", 512),
  withModifiers(PunctuationTable, "AltGr +", "AGr+", 1024),
  ShiftedPunctuationTable,
  withModifiers(PunctuationTable, "Os+", "O+", 4096),

  // Double
  withModifiers(PunctuationTable, "Control + Alt +", "C+A+", 768),
  withModifiers(PunctuationTable, "Control + AltGr +", "C+AGr+", 1280),
  withModifiers(PunctuationTable, "Control + Shift +", "C+S+", 2304),
  withModifiers(PunctuationTable, "Control + Os +", "C+O+", 4352),
  withModifiers(PunctuationTable, "Alt + AltGr +", "A+AGr+", 1536),
  withModifiers(PunctuationTable, "Alt + Shift +", "A+S+", 2560),
  withModifiers(PunctuationTable, "Alt + Os +", "A+O+", 4608),
  withModifiers(PunctuationTable, "AltGr + Shift +", "AGr+S+", 3072),
  withModifiers(PunctuationTable, "AltGr + Os +", "AGr+O+", 5120),
  withModifiers(PunctuationTable, "Shift + Os +", "S+O+", 6144),

  // Triple
  withModifiers(PunctuationTable, "Control + Alt + AltGr +", "C+A+AGr+", 1792),
  withModifiers(PunctuationTable, "Meh +", "Meh+", 2816),
  withModifiers(PunctuationTable, "Control + Alt + Os +", "C+A+O+", 4864),
  withModifiers(PunctuationTable, "Control + AltGr + Shift +", "C+AGr+S+", 3328),
  withModifiers(PunctuationTable, "Control + AltGr + Os +", "C+AGr+O+", 5376),
  withModifiers(PunctuationTable, "Control + Shift + Os +", "C+S+O+", 6400),
  withModifiers(PunctuationTable, "Alt + AltGr + Shift +", "A+AGr+S+", 3584),
  withModifiers(PunctuationTable, "Alt + AltGr + Os +", "A+AGr+O+", 5632),
  withModifiers(PunctuationTable, "Alt + Shift + Os +", "A+S+O+", 6656),
  withModifiers(PunctuationTable, "AltGr + Shift + Os +", "AGr+S+O+", 7168),

  // Quad
  withModifiers(PunctuationTable, "Meh + AltGr +", "M+AGr+", 3840),
  withModifiers(PunctuationTable, "Control + Alt + AltGr + Os +", "C+A+AGr+O+", 5888),
  withModifiers(PunctuationTable, "Hyper +", "Hyper+", 6912),
  withModifiers(PunctuationTable, "Control + AltGr + Shift + Os +", "C+AGr+S+O+", 7424),
  withModifiers(PunctuationTable, "Alt + AltGr + Shift + Os +", "A+AGr+S+O+", 7680),

  // All
  withModifiers(PunctuationTable, "Hyper + AltGr +", "H+AGr+", 7936)
];

export { PunctuationTable as default, ModifiedPunctuationTables };
