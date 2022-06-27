---
title: Properties
sidebar_position: 5
---

**This page is a work in progress. It may not be complete or accurate yet.**

Rojo supports most Roblox properties. This page documents all of the properties that Rojo supports, as well as their syntax when written in project files.

## Property Type Support

| Property Type                                       | Example Property                | Build | Live Sync | Project Files |
|:----------------------------------------------------|:--------------------------------|:--:|:--:|:--:|
| [Axes](#axes)                                       | `ArcHandles.Axes`               | ✔ | ✔ | ✔ |
| [BinaryString](#binarystring)                       | `Terrain.MaterialColors`        | ✔ | ❌ | ✔ |
| [Bool](#bool)                                       | `Part.Anchored`                 | ✔ | ✔ | ✔ |
| [BrickColor](#brickcolor)                           | `Part.BrickColor`               | ✔ | ✔ | ✔ |
| [CFrame](#cframe)                                   | `Camera.CFrame`                 | ✔ | ✔ | ✔ |
| [Color3](#color3)                                   | `Lighting.Ambient`              | ✔ | ✔ | ✔ |
| [Color3uint8](#color3uint8)                         | `Part.BrickColor`               | ✔ | ✔ | ✔ |
| [ColorSequence](#colorsequence)                     | `Beam.Color`                    | ✔ | ✔ | ✔ |
| [Content](#content)                                 | `Decal.Texture`                 | ✔ | ✔ | ✔ |
| [Enum](#enum)                                       | `Part.Shape`                    | ✔ | ✔ | ✔ |
| [Faces](#faces)                                     | `Handles.Faces`                 | ✔ | ✔ | ✔ |
| [Float32](#float32)                                 | `Players.RespawnTime`           | ✔ | ✔ | ✔ |
| [Float64](#float64)                                 | `Sound.PlaybackLoudness`        | ✔ | ✔ | ✔ |
| [Int32](#int32)                                     | `Frame.ZIndex`                  | ✔ | ✔ | ✔ |
| [Int64](#int64)                                     | `Player.UserId`                 | ✔ | ✔ | ✔ |
| [NumberRange](#numberrange)                         | `ParticleEmitter.Lifetime`      | ✔ | ✔ | ✔ |
| [NumberSequence](#numbersequence)                   | `Beam.Transparency`             | ✔ | ✔ | ✔ |
| [OptionalCoordinateFrame](#optionalcoordinateframe) | `Model.WorldPivotData`          | ✔ | ❌ | ✔ |
| [PhysicalProperties](#physicalproperties)           | `Part.CustomPhysicalProperties` | ✔ | ✔ | ✔ |
| [ProtectedString](#protectedstring)                 | `ModuleScript.Source`           | ✔ | ✔ | ✔ |
| [Ray](#ray)                                         | `RayValue.Value`                | ✔ | ✔ | ✔ |
| [Rect](#rect)                                       | `ImageButton.SliceCenter`       | ✔ | ✔ | ✔ |
| [Ref](#ref)                                         | `Model.PrimaryPart`             | ✔ | ✔ | ❌ |
| [Region3](#region3)                                 | N/A                             | ✔ | ✔ | ❌ |
| [Region3int16](#region3int16)                       | `Terrain.MaxExtents`            | ✔ | ✔ | ❌ |
| [SharedString](#sharedstring)                       | N/A                             | ✔ | ✔ | ❌ |
| [String](#string)                                   | `Instance.Name`                 | ✔ | ✔ | ✔ |
| [Tags](#tags)                                       | `Instance.Tags`                 | ✔ | ✔ | ✔ |
| [UDim](#udim)                                       | `UIListLayout.Padding`          | ✔ | ✔ | ✔ |
| [UDim2](#udim2)                                     | `Frame.Size`                    | ✔ | ✔ | ✔ |
| [Vector2](#vector2)                                 | `ImageLabel.ImageRectSize`      | ✔ | ✔ | ✔ |
| [Vector2int16](#vector2int16)                       | N/A                             | ✔ | ✔ | ✔ |
| [Vector3](#vector3)                                 | `Part.Size`                     | ✔ | ✔ | ✔ |
| [Vector3int16](#vector3int16)                       | `TerrainRegion.ExtentsMax`      | ✔ | ✔ | ✔ |
| QDir                                                | `Studio.Auto-Save Path`         | ❌ | ❌ | ❌ |
| QFont                                               | `Studio.Font`                   | ❌ | ❌ | ❌ |

## Properties in Project Files
Many types have an **implicit** and **explicit** format. The [Project format page](../project-format#instance-property-value) decribes these formats in more detail.

### Axes
The Axes type cannot be specified implicitly. For explicit values, the format is a list of strings, each of which may be either "X", "Y", or "Z". Each string sets the corresponding component.

```json
{
	"$properties": {
		"ExplicitExample1": {"Axes": ["X", "Y", "Z"]},
		"ExplicitExample2": {"Axes": ["X", "Z"]},
		"ExplicitExample3": {"Axes": []}
	}
}
```


### BinaryString
The BinaryString type cannot be specified implicitly. For explicit values, the format is a base64-encoded string.

```json
{
	"$properties": {
		"ExplicitExample": {"BinaryString": "SGVsbG8sIHdvcmxkIQ=="}
	}
}
```

### Bool
For both implicit and explicit values, the format is a boolean value.

```json
{
	"$properties": {
		"ImplicitExample": true,
		"ExplicitExample": {"Bool": false}
	}
}
```

### BrickColor
The BrickColor type cannot be specified implicitly. For explicit values, the format is an integer representing the [Number](https://developer.roblox.com/en-us/articles/BrickColor-Codes) of a BrickColor.

```json
{
	"$properties": {
		"ExplicitExample": {"BrickColor": 194}
	}
}
```

### CFrame
For implicit values, the format is a flat list of components.
```json
{
	"$properties": {
		"ImplicitExample": [
			1.0, 2.0, 3.0,
			4.0, 5.0, 6.0,
			7.0, 8.0, 9.0,
			10.0, 11.0, 12.0
		]
	}
}
```

For explicit values, the format is an object with position and orientation fields.
```json
{
	"$properties": {
		"ExplicitExample": {
			"CFrame": {
				"position": [1.0, 2.0, 3.0],
				"orientation": [
					[4.0, 5.0, 6.0],
					[7.0, 8.0, 9.0],
					[10.0, 11.0, 12.0]
				]
			}
		}
	}
}
```

### Color3
For both implicit and explicit values, the format is a list of R, G and B components, respectively. Each component is a float in the range [0, 1].

```json
{
	"$properties": {
		"ImplicitExample": [
			0.6392156862745098,
			0.6352941176470588,
			0.6470588235294118
		]
		"ExplicitExample": {
			"Color3": [
				0.6392156862745098,
				0.6352941176470588,
				0.6470588235294118
			]
		}
	}
}
```

### Color3uint8
The Color3uint8 type cannot be specified implicitly. For explicit values, the format is a list of R, G and B components, respectively. Each component is an integer in the range [0, 255].

```json
{
	"$properties": {
		"ExplicitExample": {
			"Color3": [163, 162, 165]
		}
	}
}
```

### ColorSequence
The Color3uint8 type cannot be specified implicitly. For explicit values, the format is an object with a keypoints field, which is an array of ColorSequenceKeypoints. Each ColorSequenceKeypoint is an object with time and color fields. The color field is a [Color3](#color3).

```json
{
	"$properties": {
		"ExplicitExample": {
			"ColorSequence": {
				"keypoints": [
					{
						"time": 0.0,
						"color": [1.0, 1.0, 0.5]
					},
					{
						"time": 1.0,
						"color": [0.0, 0.0, 0.0]
					}
				]
			}
		}
	}
}
```

### Content
For both implicit and explicit values, the format is a string.

```json
{
	"$properties": {
		"ImplicitExample": "rbxassetid://12345",
		"ExplicitExample": {"Content": "rbxassetid://12345"}
	}
}
```

### Enum
For implicit values, the format is a string corresponding to the name of the enum item. For example:

```json
{
	"$className": "SurfaceLight",
	"$properties": {
		"Face": "Front"
	}
}
```

For explicit values, the format is an integer corresponding to the value of the enum item. For example:

```json
{
	"$className": "SurfaceLight",
	"$properties": {
		"Face": {
			"Enum": 5
		}
	}
}
```

### Faces
The Faces type cannot be specified implicitly. For explicit values, the format is a list of strings, each of which may be either "Right", "Top", "Back", "Left", "Bottom", or "Front". Each string sets the corresponding component.

```json
{
	"$properties": {
		"ExplicitExample1": {"Axes": ["Right", "Top", "Back", "Left", "Bottom", "Front"]},
		"ExplicitExample2": {"Axes": ["Right", "Top", "Front"]},
		"ExplicitExample3": {"Axes": []}
	}
}
```

### Float32
For both implicit and explicit values, the format is a float.

```json
{
	"$properties": {
		"ImplicitExample": 15.0,
		"ExplicitExample": {"Float32": 15.0}
	}
}
```

### Float64
For both implicit and explicit values, the format is a float.

```json
{
	"$properties": {
		"ImplicitExample": 15123.0,
		"ExplicitExample": {"Float64": 15123.0}
	}
}
```

### Int32
For both implicit and explicit values, the format is an integer.

```json
{
	"$properties": {
		"ImplicitExample": 6014,
		"ExplicitExample": {"Int32": 6014}
	}
}
```
### Int64
For both implicit and explicit values, the format is an integer.

```json
{
	"$properties": {
		"ImplicitExample": 23491023,
		"ExplicitExample": {"Int64": 23491023}
	}
}
```

### NumberRange
The NumberRange type cannot be specified implicitly. For explicit values, the format is a list of Min and Max components, respectively. Each component is a float.

```json
{
	"$properties": {
		"ExplicitExample": {"NumberRange": [-36.0, 94.0]}
	}
}
```

### NumberSequence
The NumberSequence type cannot be specified implicitly. For explicit values, the format is an object with a keypoints field, which is an array of NumberSequenceKeypoints. Each ColorSequenceKeypoint is an object with time, value, and envelope fields.

```json
{
	"$properties": {
		"ExplicitExample": {
			"NumberSequence": {
				"keypoints": [
					{
						"time": 0.0,
						"value": 5.0,
						"envelope": 2.0
					},
					{
						"time": 1.0,
						"value": 22.0,
						"envelope": 0.0
					}
				]
			}
		}
	}
}
```

### OptionalCoordinateFrame
TODO

### PhysicalProperties
The PhysicalProperties type cannot be specified implicitly. For explicit values, there are two formats.

The constant string "Default", which represents the default PhysicalProperties value.

```json
{
	"$properties": {
		"ExplicitExample": {"PhysicalProperties": "Default"}
	}
}
```

An object with fields corresponding to each component.

```json
{
	"$properties": {
		"ExplicitExample": {
			"PhysicalProperties": {
				"density": 0.5,
				"friction": 1.0,
				"elasticity": 0.0,
				"frictionWeight": 50.0,
				"elasticityWeight": 25.0
			}
		}
	}
}
```

### ProtectedString
For both implicit and explicit values, the format is a string.

```json
{
	"$properties": {
		"ImplicitExample": "print('Hello world!')",
		"ExplicitExample": {"ProtectedString": "print('Hello world!')"}
	}
}
```

### Ray
The Ray type cannot be specified implicitly. For explicit values, there are several possible formats.

An object with origin and direction fields. Each component is a [Vector3](#vector3).

```json
{
	"$properties": {
		"ExplicitExample": {
			"Ray": {
				"origin": [1.0, 2.0, 3.0],
				"direction": [4.0, 5.0, 6.0]
			}
		}
	}
}
```

A list of Origin and Direction components, respectively. Each component is a [Vector3](#vector3).

```json
{
	"$properties": {
		"ExplicitExample": {
			"Ray": [
				[1.0, 2.0, 3.0],
				[4.0, 5.0, 6.0]
			]
		}
	}
}
```

### Rect
The Rect type cannot be specified implicitly. For explicit values, the format is a list of Min and Max components, respectively. Each component is a [Vector2](#vector2).

```json
{
	"$properties": {
		"ExplicitExample": {
			"Rect": [
				[0.0, 5.0],
				[10.0, 15.0]
			]
		}
	}
}
```

### Ref
Not implemented.

### Region3
Not implemented.

### Region3int16
Not implemented.

### SharedString
Not implemented.

### String
For both implicit and explicit values, the format is a string.

```json
{
	"$properties": {
		"ImplicitExample": "Hello, world!",
		"ExplicitExample": {"String": "Hello, world!"}
	}
}
```

### Tags
For both implicit and explicit values, the format is a list of strings, where each string is a tag.

```json
{
	"$properties": {
		"ImplicitExample": ["foo", "con'fusion?!", "bar"],
		"ExplicitExample": {"Tags": ["foo", "con'fusion?!", "bar"]}
	}
}
```

### UDim
The UDim type cannot be specified implicitly. For explicit values, the format is a list of Scale and Offset components, respectively. Scale is a float, and Offset is an integer.

```json
{
	"$properties": {
		"ExplicitExample": {"UDim": [1.0, 32]}
	}
}
```

### UDim2
The UDim2 type cannot be specified implicitly. For explicit values, the format is a list of X and Y components, respectively. Each component is a [UDim](#udim).

```json
{
	"$properties": {
		"ExplicitExample": {"UDim2": [[-1.0, 100], [1.0, -100]]}
	}
}
```

### Vector2
For both implicit and explicit values, the format is a list of X and Y components, respectively. Each component is a float.

```json
{
	"$properties": {
		"ImplicitExample": [-50.0, 50.0],
		"ExplicitExample": {"Vector2": [-50.0, 50.0]}
	}
}
```

### Vector2int16
For both implicit and explicit values, the format is a list of X and Y components, respectively. Each component is an integer.

```json
{
	"$properties": {
		"ImplicitExample": [-300, 300],
		"ExplicitExample": {"Vector2int16": [-300, 300]}
	}
}
```

### Vector3
For both implicit and explicit values, the format is a list of X, Y, and Z components, respectively. Each component is an float.

```json
{
	"$properties": {
		"ImplicitExample": [-300.0, 0.0, 1500.0],
		"ExplicitExample": {"Vector3": [-300.0, 0.0, 1500.0]}
	}
}
```

### Vector3int16
For both implicit and explicit values, the format is a list of X, Y, and Z components, respectively. Each component is an integer.

```json
{
	"$properties": {
		"ImplicitExample": [60, 37, -450],
		"ExplicitExample": {"Vector3int16": [60, 37, -450]}
	}
}
```
