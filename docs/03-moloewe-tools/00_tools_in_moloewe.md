# Tools in MoLöWe
Some MoLöWe Tools do not need any code on the Project Notebook in order for them to function properly while some others need Python code written in a specific structure.

The tools defined using the Project Notebook are defined as either a `get_` function or a pair of `get_` and `set_` functions. All the functions that belong to a category of tools are placed within a single dedicated Python `class`. Hence, a Python class is defined for each of the tool mentioned here. For instance, if one needs to create 2 different Plotly charts, they need to place two `get_` functions with unique names (eg. `get_first_chart` and `get_second_chart`) under a single class named `tool_graph`.

## Creating tools
MoLöWe Tools can be created in one of two ways: (i) define the tools Edit Mode, (ii) define the tools on the Project Notebook and place them on the slides. As you one can see, in both the cases, the only way to place the tool on a slide (no matter where they were defined) is from the front end while at *Edit Mode*.

## Resize a MoLöWe Tool
The once a tool has been placed on a slide, it can be resized by hovering the mouse pointer on the bottom right of the tool until the mouse pointer turns into an arrow with two points as shown below.
Then, click and drag the mouse pointer vertically or horizontally to change the size of the tool as desired.

## Reposition a MoLöWe Tool
Once a tool has been placed on a slide, it can be repositioned by clicking (with a mouse pointer) on the center of the tool and dragging the pointer on the slide. When the user starts dragging a tool, a rectangular grid structure will appear to aid the user in positioning the tool on the slide.

## Delete a MoLöWe Tool
To delete a MoLöWe tool that has been placed on a slide, (while at *Edit Mode*) hover over on the top right of the tool container until a gear icon appears.
When this icon is clicked, an interface that contains the settings of the tool opens. A button on the bottom left of this interface lets users delete the tool from the slide.