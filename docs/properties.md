---
title: Properties
sidebar_position: 5
---

**This page is a work in progress. It may not be complete or accurate yet.**

Rojo supports most Roblox properties. This page documents all of the properties that Rojo supports, as well as their syntax when written in project files.

## Property Type Support

| Property Type           | Example Property                | Build | Live Sync | Project Files |
|:------------------------|:--------------------------------|:--:|:--:|:--:|
| Axes                    | `ArcHandles.Axes`               | ✔ | ✔ | ✔ |
| BinaryString            | `Terrain.MaterialColors`        | ✔ | ❌ | ✔ |
| Bool                    | `Part.Anchored`                 | ✔ | ✔ | ✔ |
| BrickColor              | `Part.BrickColor`               | ✔ | ✔ | ✔ |
| CFrame                  | `Camera.CFrame`                 | ✔ | ✔ | ✔ |
| Color3                  | `Lighting.Ambient`              | ✔ | ✔ | ✔ |
| Color3uint8             | `Part.BrickColor`               | ✔ | ✔ | ✔ |
| ColorSequence           | `Beam.Color`                    | ✔ | ✔ | ✔ |
| Content                 | `Decal.Texture`                 | ✔ | ✔ | ✔ |
| Enum                    | `Part.Shape`                    | ✔ | ✔ | ✔ |
| Faces                   | `Handles.Faces`                 | ✔ | ✔ | ✔ |
| Float32                 | `Players.RespawnTime`           | ✔ | ✔ | ✔ |
| Float64                 | `Sound.PlaybackLoudness`        | ✔ | ✔ | ✔ |
| Int32                   | `Frame.ZIndex`                  | ✔ | ✔ | ✔ |
| Int64                   | `Player.UserId`                 | ✔ | ✔ | ✔ |
| NumberRange             | `ParticleEmitter.Lifetime`      | ✔ | ✔ | ✔ |
| NumberSequence          | `Beam.Transparency`             | ✔ | ✔ | ✔ |
| OptionalCoordinateFrame | `Model.WorldPivotData`          | ✔ | ❌ | ✔ |
| PhysicalProperties      | `Part.CustomPhysicalProperties` | ✔ | ✔ | ✔ |
| ProtectedString         | `ModuleScript.Source`           | ✔ | ✔ | ✔ |
| Ray                     | `RayValue.Value`                | ✔ | ✔ | ✔ |
| Rect                    | `ImageButton.SliceCenter`       | ✔ | ✔ | ✔ |
| Ref                     | `Model.PrimaryPart`             | ✔ | ✔ | ❌ |
| Region3                 | N/A                             | ✔ | ✔ | ❌ |
| Region3int16            | `Terrain.MaxExtents`            | ✔ | ✔ | ❌ |
| SharedString            | N/A                             | ✔ | ✔ | ❌ |
| String                  | `Instance.Name`                 | ✔ | ✔ | ✔ |
| UDim                    | `UIListLayout.Padding`          | ✔ | ✔ | ✔ |
| UDim2                   | `Frame.Size`                    | ✔ | ✔ | ✔ |
| Vector2                 | `ImageLabel.ImageRectSize`      | ✔ | ✔ | ✔ |
| Vector2int16            | N/A                             | ✔ | ✔ | ✔ |
| Vector3                 | `Part.Size`                     | ✔ | ✔ | ✔ |
| Vector3int16            | `TerrainRegion.ExtentsMax`      | ✔ | ✔ | ✔ |
| QDir                    | `Studio.Auto-Save Path`         | ❌ | ❌ | ❌ |
| QFont                   | `Studio.Font`                   | ❌ | ❌ | ❌ |

## Properties in Project Files
The type of each property has an **implicit** and **explicit** format. For example, the Anchored property can be defined implicitly as a boolean:

```json
"Anchored": false
```

Or explicitly as an object with a field, where the key is the name of the type, and the value is the property value:

```json
"Anchored": {
	"Bool": false
}
```

The [Project format page](../project-format#instance-property-value) has more information.

Each following section describes the format of the value for a type.

### Axes
A list of strings, each of which may be either "X", "Y", or "Z". Each string sets the corresponding component.

```json
["X", "Y", "Z"]
["X", "Z"]
[]
```

### BinaryString
A base64-encoded string.

```json
"SGVsbG8sIHdvcmxkIQ=="
```

### Bool
A boolean value.

```json
true
false
```

### BrickColor
An integer representing the [Number](https://developer.roblox.com/en-us/articles/BrickColor-Codes) of a BrickColor.

```json
194
```

### CFrame
May have one of several formats.

An object with position and orientation fields.
```json
{
	"position": [1.0, 2.0, 3.0],
	"orientation": [
		[4.0, 5.0, 6.0],
		[7.0, 8.0, 9.0],
		[10.0, 11.0, 12.0]
	]
}
```

A flat list of components.
```json
[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0]
```

### Color3
A list of R, G and B components, respectively. Each component is a float in the range [0, 1].

```json
[0.6392156862745098, 0.6352941176470588, 0.6470588235294118]
```

### Color3uint8
A list of R, G and B components, respectively. Each component is an integer in the range [0, 255].

```json
[163, 162, 165]
```

### ColorSequence
An object with a keypoints field, which is an array of ColorSequenceKeypoints. Each ColorSequenceKeypoint is an object with time and color fields. The color field is a [Color3](#color3).

```json
{
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
```

### Content
A string.

```json
"rbxassetid://12345"
```

### Enum
An integer representing the value of an EnumItem.

```json
1234
```

### Faces
A list of strings, each of which may be either "Right", "Top", "Back", "Left", "Bottom", or "Front". Each string sets the corresponding component.

```json
["Right", "Top", "Back", "Left", "Bottom", "Front"]
["Right", "Top", "Front"]
[]
```

### Float32
A float.

```json
15.0
```

### Float64
A float.

```json
15123.0
```

### Int32
An integer.

```json
6014
```
### Int64
An integer.

```json
23491023
```

### NumberRange
A list of Min and Max components, respectively. Each component is a float.

```json
[-36.0, 94.0]
```

### NumberSequence
An object with a keypoints field, which is an array of NumberSequenceKeypoints. Each ColorSequenceKeypoint is an object with time, value, and envelope fields.

```json
{
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
```

### OptionalCoordinateFrame
TODO

### PhysicalProperties
The constant string "Default", which represents the default PhysicalProperties value.

```json
"Default"
```

An object with fields corresponding to each component.

```json
{
	"density": 0.5,
	"friction": 1.0,
	"elasticity": 0.0,
	"frictionWeight": 50.0,
	"elasticityWeight": 25.0
}
```

### ProtectedString
A string.

```json
"print('Hello world!')"
```

### Ray
May have one of several formats.

An object with origin and direction fields. Each component is a [Vector3](#vector3).

```json
{
	"origin": [
		1.0,
		2.0,
		3.0
	],
	"direction": [
		4.0,
		5.0,
		6.0
	]
}
```

A list of Origin and Direction components, respectively. Each component is a [Vector3](#vector3).

```json
[
	[1.0, 2.0, 3.0],
	[4.0, 5.0, 6.0]
]
```

### Rect
A list of Min and Max components, respectively. Each component is a [Vector2](#vector2).

```json
[
	[0.0, 5.0],
	[10.0, 15.0]
]
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
A string.

```json
"Hello, world!"
```

### UDim
A list of Scale and Offset components, respectively. Scale is a float, and Offset is an integer.

```json
[1.0, 32]
```

### UDim2
A list of X and Y components, respectively. Each component is a [UDim](#udim).

```json
[[-1.0, 100], [1.0, -100]]
```

### Vector2
A list of X and Y components, respectively. Each component is a float.

```json
[-50.0, 50.0]
```

### Vector2int16
A list of X and Y components, respectively. Each component is an integer.

```json
[-300, 300]
```

### Vector3
A list of X, Y, and Z components, respectively. Each component is an float.

```json
[-300.0, 0.0, 1500.0]
```

### Vector3int16
A list of X, Y, and Z components, respectively. Each component is an integer.

```json
[60, 37, -450]
```
