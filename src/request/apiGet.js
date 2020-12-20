import React from "react";
import apiUse from "./apiUse";

export function ApiGetData({
  resource,
  id = null,
  swt = "result",
  uglyVar = null
}) {
  const [elems, setElems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      if (resource === "/authors/undefined" && uglyVar) {
        return null;
      }
      if (swt !== "result") {
        const fetchedElems = await apiUse({ resource });
        setElems(fetchedElems);
      } else {
        const { result: fetchedElems } = await apiUse({
          resource
        });
        setElems((elems) => [...elems, ...fetchedElems]);
      }
    })();
  }, [setElems, id, resource, swt, uglyVar]);

  if (!elems) {
    return null;
  }
  return elems;
}

export default ApiGetData;
