import marshmallow as m


class cancelledcamps(m.Schema):
    email = m.fields.Email(missing=None)
    started_at = m.fields.Str(missing=None)
    ended_at = m.fields.Str(missing=None)



    class Meta:
        unknown = m.EXCLUDE
