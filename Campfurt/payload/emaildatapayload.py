
import marshmallow as m


class Getcampdata(m.Schema):
    email = m.fields.Email(required=True)




    class Meta:
        unknown = m.EXCLUDE
