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

### Bool

Implicit:
```json
"Anchored": false
```

Explicit:
```json
"Anchored": {
	"Bool": false
}
```

### String

Implicit:
```json
"Text": "Hello, world!"
```

Explicit:
```json
"Text": {
	"String": "Hello, world!"
}
```

### Number Types (Int32, Int64, Float32, Float64)

Implicit:
```json
"RespawnTime": 12.5
"ZIndex": 70
```

Explicit:
```json
"RespawnTime": {
	"Float32": 12.5
}
"ZIndex": {
	"Int32": 70
}
```

### Enum

Implicit enum values can only be used for enums created before the current release of Rojo. To specify an enum that was recently released, used the explicit property syntax.

Implicit:
```json
"Shape": "Cylinder"
```

Explicit:
```json
"Shape": {
	"Enum": 2
}
```