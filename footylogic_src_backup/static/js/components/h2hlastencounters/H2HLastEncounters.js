import React from "react";

import ExpandableTable from "../../sharedcomponents/ExpandableTable/ExpandableTable";

export function H2HLastEncounters(props) {
  return (
    <ExpandableTable
      data={props.data}
      headings={props.headings}
      eventId={props.eventId}
      loader={props.loader}
      languageId={props.languageId}
      temporarilyNoData={props.temporarilyNoData}
    />
  );
}
