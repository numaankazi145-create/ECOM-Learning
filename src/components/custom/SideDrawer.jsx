import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

export function SideDrawer({
  open,
  OpenHandle,
  Heading,
  Description,
  Action,
  HandleSubmit,

  reset,
  children,
}) {
  return (
    <div>
      <Drawer direction="right" open={open} onOpenChange={OpenHandle}>
        <DrawerContent>
          <DrawerHeader className="p-5">
            <DrawerTitle className="text-2xl font-bold leading text-blue-900">
              {Heading}
            </DrawerTitle>
            <DrawerDescription className="text-blue-900">
              {Description}
            </DrawerDescription>
          </DrawerHeader>
          <hr className="border-b-2 border-gray-100 " />
          {children}
          <hr className="border-b-2 border-gray-200" />

          <DrawerFooter className="p-5">
            <button
              onClick={HandleSubmit}
              type="submit"
              className="bg-blue-900 text-white text-lg font-bold w-full p-2.5 rounded hover:bg-blue-950 hover:outline hover:outline-blue-950 hover:text-white   transition-all duration-500"
            >
              {Action}
            </button>
            <DrawerClose asChild>
              <button
                onClick={() => reset()}
                className="bg-white outline outline-blue-900 text-blue-900 text-lg font-bold w-full p-2.5 rounded"
              >
                Cancel
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
