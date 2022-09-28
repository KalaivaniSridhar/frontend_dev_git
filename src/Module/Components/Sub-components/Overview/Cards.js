import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Typography } from "@mui/material";
import { Cards } from '../../../Utils/Constants'

export default function DisplayCard() {
  return (
    <>
      {Cards.map((card) => {
        return (
          <Box
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
          >
            <Card className="card-btn">
              <CardHeader
                action={
                  <MoreVertIcon />

                }
                titleTypographyProps={{ variant: "", fontWeight: 'bold' }}
                title={card.Title}

              />
              <Typography variant="h5">{card.count}</Typography>
            </Card>
          </Box>

        );

      }
      )}
    </>
  )

}
